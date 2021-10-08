using Bible.Domain.Common;
using System.Threading.Tasks;

namespace Bible.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
